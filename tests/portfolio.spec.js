import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("dark default and theme choice persists across reloads", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass("dark");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).not.toHaveClass("dark");
  await page.reload();
  await expect(page.locator("html")).not.toHaveClass("dark");
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveClass("dark");
  await expect(page.locator(".prose")).toContainText("enthusiastic developer");
  expect(errors).toEqual([]);
});

test("all projects open, preserve content, enlarge screenshots, and restore focus", async ({
  page,
}) => {
  await page.goto("/");
  const cards = page.locator(".project-trigger");
  await expect(cards).toHaveCount(4);
  for (let index = 0; index < 4; index++) {
    const card = cards.nth(index);
    await card.click();
    const dialog = page.locator(".project-dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "Built with" }),
    ).toBeVisible();
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
    await dialog.getByRole("button", { name: /^Enlarge / }).click();
    await expect(page.locator(".image-dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(".image-dialog")).toHaveCount(0);
    await expect(dialog).toBeVisible();
    const repository = dialog.getByRole("link", { name: "View repository" });
    await expect(repository).toHaveCount([1, 2].includes(index) ? 1 : 0);
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(card).toBeFocused();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  }
});

test("modal focus is contained and close button works", async ({ page }) => {
  await page.goto("/");
  await page.locator(".project-trigger").first().focus();
  await page.keyboard.press("Enter");
  const dialog = page.locator(".project-dialog");
  for (let index = 0; index < 8; index++) {
    await page.keyboard.press("Tab");
    expect(
      await dialog.evaluate((el) => el.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.getByRole("button", { name: "Close project details" }).click();
  await expect(dialog).toHaveCount(0);
});

test("CV, original media, email and social destinations remain available", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const download = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download CV" }).click();
  expect((await download).suggestedFilename()).toBe("ViduraAbeysinghe_CV.pdf");
  for (const path of [
    "/ViduraAbeysinghe_CV.pdf",
    "/myphoto.png",
    "/projects/Project1_1.png",
    "/projects/Project2_1.png",
    "/projects/Project3_1.png",
    "/projects/Project4_1.png",
    "/historyofslcricArticle.webp",
  ]) {
    expect((await request.get(path)).status()).toBe(200);
  }
  await expect(
    page.getByRole("link", { name: "Send Vidura an email" }),
  ).toHaveAttribute("href", "mailto:viduravd@gmail.com");
  await expect(page.locator(".hero-socials a")).toHaveCount(4);
});

for (const width of [320, 390, 640, 768, 1024, 1440]) {
  test(`responsive layout has no horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    for (const id of [
      "home",
      "about",
      "skills",
      "projects",
      "education",
      "medium",
      "contact",
    ]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
    if (width <= 640) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await expect(
        page.getByRole("navigation", { name: "Main navigation" }),
      ).toBeVisible();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Projects", exact: true })
        .click();
      await expect(page).toHaveURL(/#projects$/);
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toHaveAttribute("aria-expanded", "false");
      const top = await page
        .locator("#projects")
        .evaluate((el) => el.getBoundingClientRect().top);
      expect(top).toBeGreaterThanOrEqual(70);
    }
  });
}

for (const theme of ["dark", "light"]) {
  test(`automated WCAG AA checks in ${theme} theme`, async ({ page }) => {
    await page.goto("/");
    if (theme === "light")
      await page.getByRole("button", { name: "Switch to light theme" }).click();
    await expect(page.locator(".prose")).toContainText(
      "enthusiastic developer",
    );
    await page.evaluate(() => document.fonts.ready);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    ).toEqual([]);
    await page.locator(".project-trigger").first().click();
    const modalResult = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      modalResult.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  });
}

test("theme toggle still works when browser storage is blocked", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("Storage blocked");
    };
    Storage.prototype.setItem = () => {
      throw new Error("Storage blocked");
    };
  });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).not.toHaveClass("dark");
});

test("reduced motion preference stops role animation", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(page.locator(".animated-role")).toHaveCSS(
    "animation-name",
    "none",
  );
});

test("mobile menu closes with Escape and restores toggle focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await expect(page.getByRole("navigation")).not.toBeVisible();
});

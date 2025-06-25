import { motion } from 'framer-motion';
import React from 'react';

const ArticleCard = ({ title, description, image, link, date, info }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform hover:scale-125 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p><br></br>
                <p className="text-gray-600 dark:text-gray-300">{info}</p>
                <div className="mt-6 font-bold">{date}</div>
            </div>
        </motion.a>
    );
};

export default ArticleCard;
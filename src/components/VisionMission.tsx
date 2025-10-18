import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600">
            Driving innovation in women's healthcare through technology and
            compassion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Target className="w-8 h-8 text-pink-600 mr-3" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </motion.div>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              At BCAN Solutions, we are dedicated to transforming women's
              healthcare through innovative technology. Our mission is to
              develop accessible, reliable, and research-driven solutions that
              empower women to take control of their health, enabling early
              detection and proactive care. Through our work, we strive to help
              women live more and live better.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              >
                <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </motion.div>
            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We envision a world where every woman has the knowledge, tools,
              and confidence to safeguard her health. By pioneering advancements
              in MedTech, raising awareness, and breaking barriers to early
              detection, BCAN Solutions is committed to redefining women's
              healthcare—creating a future where preventable diseases no longer
              go unnoticed.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

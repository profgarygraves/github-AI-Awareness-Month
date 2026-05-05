import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, children, align = 'center' }) {
  const centered = align === 'center';

  return (
    <motion.div
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-aurora">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{children}</p>}
    </motion.div>
  );
}

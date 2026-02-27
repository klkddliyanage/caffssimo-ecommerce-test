import { motion } from 'motion/react';

const PAGE_PADDING = 'pt-24 pb-32';
const CONTAINER = 'max-w-7xl mx-auto px-6';
const LABEL = 'text-[10px] font-bold uppercase tracking-[0.3em] text-espresso/80';
const SECTION_HEADING = 'text-3xl md:text-4xl font-serif font-bold text-espresso tracking-tight';

/** Edit menu sections and items here. Add/remove sections or items as needed. */
const MENU_SECTIONS = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      { name: 'Avocado Toast', description: 'Sourdough, smashed avocado, cherry tomatoes, feta', price: '12' },
      { name: 'Granola & Yogurt', description: 'House granola, Greek yogurt, seasonal fruit', price: '10' },
      { name: 'Eggs Your Way', description: 'Two eggs, sourdough, greens', price: '14' },
      { name: 'Breakfast Burrito', description: 'Scrambled eggs, black beans, cheese, salsa', price: '13' },
    ],
  },
  {
    id: 'hot',
    label: 'Hot Beverages',
    items: [
      { name: 'Espresso', description: 'Single or double', price: '3.50' },
      { name: 'Americano', description: 'Espresso with hot water', price: '4.50' },
      { name: 'Flat White', description: 'Double ristretto, velvety milk', price: '5.50' },
      { name: 'Cappuccino', description: 'Espresso, steamed milk, foam', price: '5' },
      { name: 'Latte', description: 'Espresso with steamed milk', price: '5.50' },
      { name: 'Mocha', description: 'Chocolate, espresso, milk', price: '6' },
      { name: 'Filter Coffee', description: 'Single-origin batch brew', price: '4.50' },
      { name: 'Hot Chocolate', description: 'House blend, whipped cream', price: '5' },
    ],
  },
  {
    id: 'cold',
    label: 'Cold Beverages',
    items: [
      { name: 'Iced Latte', description: 'Espresso over ice, cold milk', price: '5.50' },
      { name: 'Iced Americano', description: 'Espresso over ice, water', price: '4.50' },
      { name: 'Cold Brew', description: 'House cold brew, 24hr steep', price: '5.50' },
      { name: 'Iced Mocha', description: 'Chocolate, espresso, cold milk', price: '6' },
      { name: 'Iced Matcha Latte', description: 'Ceremonial matcha, oat or dairy', price: '6.50' },
      { name: 'Fresh Juices', description: 'Seasonal selection', price: '6' },
    ],
  },
  {
    id: 'sweet',
    label: 'Sweet',
    items: [
      { name: 'Croissant', description: 'Plain or almond', price: '4.50' },
      { name: 'Banana Bread', description: 'House recipe, walnuts', price: '6' },
      { name: 'Chocolate Brownie', description: 'Warm, with optional cream', price: '6' },
      { name: 'Cinnamon Roll', description: 'Fresh baked, cream cheese glaze', price: '6.50' },
    ],
  },
  {
    id: 'savoury',
    label: 'Savoury',
    items: [
      { name: 'Grilled Cheese', description: 'Sourdough, aged cheddar', price: '11' },
      { name: 'Soup of the Day', description: 'Served with bread', price: '9' },
      { name: 'Quiche', description: 'Daily selection, side salad', price: '12' },
      { name: 'Falafel Wrap', description: 'House falafel, hummus, greens', price: '13' },
    ],
  },
  {
    id: 'catering',
    label: 'Catering & Special Orders',
    items: [
      { name: 'Group Orders', description: 'Pre-orders for 6+ people', price: '—' },
      { name: 'Event Catering', description: 'Custom menus for events', price: '—' },
      { name: 'Corporate Orders', description: 'Regular or one-off delivery', price: '—' },
    ],
  },
];

function MenuSection({
  section,
  index,
}: {
  section: (typeof MENU_SECTIONS)[0];
  index: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-mocha/10 pb-12 md:pb-16 last:border-0"
    >
      {/* <p className={LABEL + ' mb-2'}>{section.label}</p> */}
      <h2 className={SECTION_HEADING + ' mb-8'}>{section.label}</h2>
      <ul className="space-y-6">
        {section.items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-3 border-b border-mocha/5 last:border-0"
          >
            <div>
              <p className="font-medium text-espresso">{item.name}</p>
              {item.description && (
                <p className="text-sm text-text-secondary mt-0.5">{item.description}</p>
              )}
            </div>
            <span className="text-mocha font-medium shrink-0 sm:text-right">
              {item.price === '—' ? item.price : `$${item.price}`}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default function MenusPage() {
  return (
    <div className={PAGE_PADDING}>
      <div className={CONTAINER}>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <p className={LABEL + ' mb-4'}>Menus</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-espresso tracking-tight leading-tight mb-6">
            Food & drink at our cafés
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Our offerings are designed to pair perfectly with great coffee. Menu items may vary by branch, ask in store for the full selection.
          </p>
        </motion.header>

        <div className="space-y-12 md:space-y-16">
          {MENU_SECTIONS.map((section, index) => (
            <MenuSection key={section.id} section={section} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-sm text-text-secondary/80 text-center"
        >
          Prices and availability may vary by location. Allergen information available on request.
        </motion.p>
      </div>
    </div>
  );
}

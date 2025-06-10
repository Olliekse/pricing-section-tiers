# Pricing Section (Tiers)

A modern, responsive pricing section built with React and TypeScript. This component features a clean, professional design with monthly/annual pricing toggle and three distinct pricing tiers.

![Pricing Section Preview](preview.png)

## Features

- 🎨 Modern, clean design with smooth transitions
- 📱 Fully responsive layout
- 🔄 Monthly/Annual pricing toggle
- 💰 Three distinct pricing tiers (Basic, Standard, Premium)
- ✅ Feature lists with checkmark icons
- 🎯 Highlighted "Most Popular" plan
- 🎭 Styled with styled-components
- 📝 Written in TypeScript for better type safety

## Technologies Used

- React
- TypeScript
- styled-components
- Vite (for development and building)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pricing-section-tiers.git
```

2. Navigate to the project directory:

```bash
cd pricing-section-tiers
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Pricing toggle and title section
│   └── ProductList.tsx   # Pricing cards and features
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Usage

The pricing section can be easily integrated into any React application:

```tsx
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  const [planSelection, setPlanSelection] = useState<"monthly" | "annually">(
    "monthly"
  );

  return (
    <div>
      <Header setPlanSelection={setPlanSelection} />
      <ProductList planSelection={planSelection} />
    </div>
  );
}
```

## Customization

### Styling

The component uses styled-components for styling. You can customize the appearance by modifying the styled components in each file:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Animations

### Pricing

Pricing information is centralized in the `ProductList.tsx` file:

```typescript
const PRICE_INFO: Record<string, PriceInfo> = {
  basic: {
    monthly: 9.99,
    annually: 6.99,
    annualTotal: 84,
  },
  // ... other plans
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by modern SaaS pricing pages
- Icons from [Heroicons](https://heroicons.com/)
- Built with [Vite](https://vitejs.dev/)

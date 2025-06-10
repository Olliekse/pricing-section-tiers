# Pricing Section (Tiers)

Build a responsive three-tier pricing section with toggle for monthly / annual prices

## Project brief

In this challenge, I developed a responsive pricing section with three distinct plans: Basic, Standard and Premium, each with its own set of features and call-to-action (CTA) buttons. The section features a toggle which allows users to switch between monthly and annual pricing views.

### Implementation requirements

- **Design fidelity**: Followed the design closely with specified text colors, font sizes, font weights, spacing, and dimensions.
- **Interactivity**:
  - **Button states**: Implemented and styled buttons to reflect different states - normal, hover, focus, and disabled.
  - **Toggle**: Implemented a functional toggle that conditionally updates the displayed pricing information to either a monthly or annual pricing view without page reloads. The tier's price and "Billed {period}" line under the price updates depending on the toggle state.
- **Responsive behavior**:
  - **Text size**: Implemented responsive text sizing; font size is larger for wider devices, smaller for narrow devices.
  - **Responsive layout**: Content stacks vertically on smaller screens and aligns horizontally as the screen width increases.
- **Cross-browser compatibility**: Solution works across major browsers including Chrome, Firefox, and Safari.
- **Performance optimization**: Implemented efficient CSS and JavaScript techniques for fast load times.
- **Accessibility compliance**: Followed best practices for web accessibility, using semantic HTML and ARIA roles where necessary, and ensuring keyboard navigation support.

## Resources used

- Design files for desktop, tablet and mobile
- High resolution image assets
- Style guide for typography, colors and spacing
- React + TypeScript + Vite for development
- styled-components for styling

## Development process

1. **Setup and Planning**

   - Created project using Vite with React and TypeScript
   - Set up styled-components for styling
   - Analyzed design requirements and created component structure

2. **Component Development**

   - Created Header component with pricing toggle
   - Implemented ProductList component with three pricing tiers
   - Added responsive styling and animations

3. **Features Implementation**

   - Implemented monthly/annual pricing toggle
   - Added button states and interactions
   - Created responsive layout system
   - Implemented accessibility features

4. **Testing and Optimization**
   - Tested across different browsers
   - Optimized performance
   - Ensured responsive behavior
   - Verified accessibility compliance

## Technologies used

- React
- TypeScript
- styled-components
- Vite

## Key learnings

- Implementing complex responsive layouts
- Managing state for pricing toggles
- Creating accessible interactive components
- Optimizing performance in React applications
- Using TypeScript for better type safety
- Working with styled-components for maintainable CSS

## Future improvements

- Add animations for price changes
- Implement dark mode
- Add more interactive features
- Enhance accessibility features
- Add unit tests
- Implement internationalization

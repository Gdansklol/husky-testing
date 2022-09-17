import { render, screen } from '@testing-library/react';
import App from './App';

test('renders corerectly', async () => {
  render(<App />);

  expect(screen).getByText("Hello User").toBeInTheDocument();
});



// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

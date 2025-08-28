import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/app/components/Navbar';

describe('Navbar component', () => {
  it('should render without crashing', () => {
    render(<Navbar />);
  });

  it('should contain link to Accueil', () => {
    render(<Navbar />);
    expect(screen.getByText('Accueil')).toBeInTheDocument();
  });

  it('should contain link to Sorties', () => {
    render(<Navbar />);
    expect(screen.getByText('Sorties')).toBeInTheDocument();
  });
});

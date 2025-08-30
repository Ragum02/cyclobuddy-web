import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '@/app/components/Navbar/Navbar';

describe('Navbar structure', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders the title link', () => {
    const nav = screen.getByRole('navigation');
    const titleLink = within(nav).getByRole('link', { name: 'CycloBuddy' });
    expect(titleLink).toHaveAttribute('href', '/');
  });

  it('renders the navigation list with 3 links', () => {
    const list = screen.getByRole('list');
    const listItems = within(list).getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    expect(within(list).getByRole('link', { name: 'Sorties' })).toHaveAttribute(
      'href',
      '/rides',
    );
    expect(
      within(list).getByRole('link', { name: 'Mes sorties' }),
    ).toHaveAttribute('href', '/my-rides');
    expect(
      within(list).getByRole('link', { name: 'Nouvelle sortie' }),
    ).toHaveAttribute('href', '/create-ride');
  });

  it('renders the account actions', () => {
    const actions = screen.getByRole('group', { name: /account actions/i });
    expect(
      within(actions).getByRole('link', { name: 'Se connecter' }),
    ).toHaveAttribute('href', '/login');
    expect(
      within(actions).getByRole('link', { name: "S'inscrire" }),
    ).toHaveAttribute('href', '/register');
  });
});

import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/app/components/Footer/Footer';

describe('Footer structure', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the title link, copyright, and mobile application link', () => {
    const mainNav = screen.getByLabelText(
      'footer main title and mobile application link',
    );

    const titleLink = within(mainNav).getByRole('link', { name: 'CycloBuddy' });
    expect(titleLink).toHaveAttribute('href', '/');

    const copyrightText = within(mainNav).getByText('© 2025 - CycloBuddy');
    expect(copyrightText).toBeInTheDocument();

    const mobileLink = within(mainNav).getByRole('link', {
      name: 'Applications Mobile',
    });
    expect(mobileLink).toHaveAttribute('href', '/mobile-app');
  });

  it('renders the main navigation list with 3 links', () => {
    const mainLinksNav = screen.getByLabelText('footer navigations links');
    const listItems = within(mainLinksNav).getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    expect(
      within(mainLinksNav).getByRole('link', { name: 'Sorties' }),
    ).toHaveAttribute('href', '/rides');
    expect(
      within(mainLinksNav).getByRole('link', { name: 'Groupes' }),
    ).toHaveAttribute('href', '/groups');
    expect(
      within(mainLinksNav).getByRole('link', { name: 'Nouvelle sortie' }),
    ).toHaveAttribute('href', '/create-ride');
  });

  it('renders the support navigation list with 3 links', () => {
    const supportNav = screen.getByLabelText('footer support links');
    const listItems = within(supportNav).getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    expect(
      within(supportNav).getByRole('link', { name: 'Contact' }),
    ).toHaveAttribute('href', '/contact');
    expect(
      within(supportNav).getByRole('link', {
        name: "Conditions d'utilisation",
      }),
    ).toHaveAttribute('href', '/terms-of-use');
    expect(
      within(supportNav).getByRole('link', {
        name: 'Charte de bonne conduite',
      }),
    ).toHaveAttribute('href', '/code-of-good-conduct');
  });

  it('renders the legal navigation list with 3 links', () => {
    const legalNav = screen.getByLabelText('footer legal links');
    const listItems = within(legalNav).getAllByRole('listitem');
    expect(listItems).toHaveLength(3);

    expect(
      within(legalNav).getByRole('link', { name: 'À propos' }),
    ).toHaveAttribute('href', '/about');
    expect(
      within(legalNav).getByRole('link', { name: 'Mentions légales' }),
    ).toHaveAttribute('href', '/legal');
    expect(
      within(legalNav).getByRole('link', {
        name: 'Politique de confidentialité',
      }),
    ).toHaveAttribute('href', '/privacy-policy');
  });
});

import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarCardDashboard from './CarCardDashboard.tsx';

describe('Dashboard Car Card', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders car information', () => {
    render(
        <CarCardDashboard car={ {
            id: '6e2bc663-5197-441a-957b-bc75e4a2da7c',
            image: 'car01.min.jpg',
            plate: 'DBH-3491',
            manufacture: 'Ford',
            model: 'F150',
            rent_per_day: 200000,
            capacity: 2,
            description: 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.',
            available_at: new Date(),
            transmission: 'Automatic',
            available: true,
            type: 'Sedan',
            year: 2022,
            options: [
                'Cruise Control',
                'Tinted Glass',
                'Tinted Glass',
                'Tinted Glass',
                'AM/FM Stereo'
            ],
            specs: [
                'Brake assist',
                'Leather-wrapped shift knob',
                'Glove box lamp',
                'Air conditioning w/in-cabin microfilter',
                'Body color folding remote-controlled pwr mirrors',
                'Dual-stage front airbags w/occupant classification system'
            ],
            creator_id: '0f9a16f5-2d9a-4fa5-8bc2-9a00df22921d',
            last_updater_id: '0f9a16f5-2d9a-4fa5-8bc2-9a00df22921d',
            deleter_id: null,
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null
        } }/>,
        {
          wrapper: BrowserRouter
        }
    );

    const dashboardCarFormTitle = screen.getByTestId('dashboard-car-card-title');
    const dashboardCarFormPrice = screen.getByTestId('dashboard-car-card-price');
    const dashboardCarFormDescription = screen.getByTestId('dashboard-car-card-description');
    const dashboardCarFormCapacity = screen.getByTestId('dashboard-car-card-capacity');
    const dashboardCarFormTransmission = screen.getByTestId('dashboard-car-card-transmission');
    const dashboardCarFormYear = screen.getByTestId('dashboard-car-card-year');

    expect(dashboardCarFormTitle.textContent).toBe('Ford F150 / Sedan');
    expect(dashboardCarFormPrice.textContent).toBe('Rp 200.000 / hari');
    expect(dashboardCarFormDescription.textContent).toBe('Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.');
    expect(dashboardCarFormCapacity.textContent).toBe('2 orang');
    expect(dashboardCarFormTransmission.textContent).toBe('Automatic');
    expect(dashboardCarFormYear.textContent).toBe('Tahun 2022');
  });
});
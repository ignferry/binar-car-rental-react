import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import CarForm from './CarForm.tsx';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Car Form', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders form fields', () => {
    render(
        <CarForm/>,
        {
          wrapper: BrowserRouter
        }
    );

    const dashboardCarFormPlate = screen.getByTestId('dashboard-car-form-plate');
    const dashboardCarFormManufacture = screen.getByTestId('dashboard-car-form-manufacture');
    const dashboardCarFormModel = screen.getByTestId('dashboard-car-form-model');
    const dashboardCarFormRent = screen.getByTestId('dashboard-car-form-rent');
    const dashboardCarFormCapacity = screen.getByTestId('dashboard-car-form-capacity');
    const dashboardCarFormDescription = screen.getByTestId('dashboard-car-form-description');
    const dashboardCarFormAvailableAt = screen.getByTestId('dashboard-car-form-available-at');
    const dashboardCarFormTransmission = screen.getByTestId('dashboard-car-form-transmission');
    const dashboardCarFormType = screen.getByTestId('dashboard-car-form-type');
    const dashboardCarFormYear = screen.getByTestId('dashboard-car-form-year');
    const dashboardCarFormOptions = screen.getByTestId('dashboard-car-form-options');
    const dashboardCarFormSpecs = screen.getByTestId('dashboard-car-form-specs');
    const dashboardCarFormImage = screen.getByTestId('dashboard-car-form-image');
    const dashboardCarFormSubmit = screen.getByTestId('dashboard-car-form-submit');


    expect(dashboardCarFormPlate.textContent).toBe('Plate');
    expect(dashboardCarFormManufacture.textContent).toBe('Manufacture');
    expect(dashboardCarFormModel.textContent).toBe('Model');
    expect(dashboardCarFormRent.textContent).toBe('Rent Per Day');
    expect(dashboardCarFormCapacity.textContent).toBe('Capacity');
    expect(dashboardCarFormDescription.textContent).toBe('Description');
    expect(dashboardCarFormAvailableAt.textContent).toBe('Available At');
    expect(dashboardCarFormTransmission.textContent).toBe('Transmission');
    expect(dashboardCarFormType.textContent).toBe('Type');
    expect(dashboardCarFormYear.textContent).toBe('Year');
    expect(dashboardCarFormOptions.textContent).toBe('Options');
    expect(dashboardCarFormSpecs.textContent).toBe('Specs');
    expect(dashboardCarFormImage.textContent).toBe('Image');
    expect(dashboardCarFormSubmit.textContent).toBe('Submit');
  });
});
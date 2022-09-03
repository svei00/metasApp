import { render, screen } from "@testing-library/react"
import Goal from  './Goals';

jest.mock("react-router-dom", () => {                               // We run this because we're using a library in Link so it is neccesary to create a mock
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    Link: ({children}) => <div>{children}</div>
  };
});                  

describe ('Goal Component', () => {
  it('Button renderezing', () => {
    render(<Goal />);
    const button = screen.getByText('Complete!');
    expect(button).toBeInTheDocument();
  });

  test('Icon renderezing', () => {                                  // Remember we can use test or it
    render(<Goal icon="🏃"/>);
    const icon = screen.getByText('🏃');
    expect(icon).toBeInTheDocument();
  });
})
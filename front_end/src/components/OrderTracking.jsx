import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/OrderTracking.css'
import { Getshipment } from '../Global/apiCall';

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const Step = styled.div`
  text-align: left;
  flex: 1;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StepIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.active ? '#4caf50' : '#ddd'};
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const StepLabel = styled.div`
  margin-top: 5px;
  font-weight: bold;
`;

const StepDescription = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #555;
`;

const StepBar = styled.div`
  width: 4px;
  background-color: ${props => props.active ? '#4caf50' : '#ddd'};
  position: absolute;
  left: 13px;
  top: 30px;
  bottom: -20px;
  z-index: 0;
`;

const steps = [
  { label: 'Order Placed', description: 'We have received your order and are preparing it for shipment.' },
  { label: 'Processing', description: 'Your order is being processed and will be shipped soon.' },
  { label: 'Shipped', description: 'Your order has been shipped and is on its way to the delivery address.' },
  { label: 'Out for Delivery', description: 'The delivery agent is on their way to deliver your order.' },
  { label: 'Delivered', description: 'Your order has been delivered. Enjoy your purchase!' }
];

const OrderTracking = ({ currentStep = 2 }) => {
  const [shipment, setShipment] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Getshipment();
        console.log(response.data.data);
        setShipment(response.data.data);
      } catch (error) {
        console.error('Error fetching shipment data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once on component mount

  useEffect(() => {
    console.log(shipment); // Log shipment whenever it changes
  }, [shipment]);

  return (<>
    <Navbar></Navbar>
    <div className="tracking-container">
      <div class="flex-shrink-0 p-3" style={{ width: '280px', border: '1px solid black' }}>
        <a href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
          <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          <span class="fs-5 fw-semibold">Overview</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home {Array.isArray(shipment) ? shipment.length : ""}
            </button>
            <div class="collapse" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" class="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <Container>
        <Header>Order Tracking</Header>
        <ProgressContainer>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIcon active={index <= currentStep} />
              {index < steps.length - 1 && (
                <StepBar active={index < currentStep} />
              )}
              <StepLabel>{step.label}</StepLabel>
              <StepDescription>{step.description}</StepDescription>
            </Step>
          ))}
        </ProgressContainer>
      </Container>
    </div>

    <Footer></Footer>
  </>
  );
};

export default OrderTracking;

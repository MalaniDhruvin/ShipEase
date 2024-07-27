import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

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



const Tracking = ({ Steps, data }) => {
  const [currentStep, setCurrentStep] = useState(Steps);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(prevStep => prevStep + 1);
    }, 1000);
    console.log(currentStep)

    if (currentStep == 10) {
      clearTimeout(timer)
    }
    return () => clearTimeout(timer);
  }, [currentStep]);
  return (
    <div style={{zIndex:'10',backgroundColor:'white'}} className='Tracking-containers'>
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

      <div className="tracking-data-container">
        <h4 style={{textAlign:"center",marginBottom:'5px',color:'#0B0757'}}>Details</h4>
        <p style={{fontSize:'16px',fontWeight:500,color:'#0B0757'}}>Origin:</p>
        <p style={{ fontWeight: 450,marginTop:'-12px',fontSize:'14px',color:"#565E64" }}>{data.origin.streetAddress}, {data.origin.city}, {data.origin.state}, {data.origin.country}, {data.origin.postalCode}</p>
        <p style={{fontSize:'16px',fontWeight:500,color:'#0B0757'}}>Destination:</p>
        <p style={{ fontWeight: 450,marginTop:'-12px',fontSize:'14px',color:"#565E64"  }}>{data.destination.streetAddress}, {data.destination.city}, {data.destination.state}, {data.destination.country}, {data.destination.postalCode}</p>
        <p style={{fontSize:'16px',fontWeight:500,color:'#0B0757'}}>Weight: <span style={{fontWeight: 450,fontSize:'15.5px',color:"#565E64"  }}>{data.weight}kg</span></p>
        <p style={{fontSize:'16px',fontWeight:500,color:'#0B0757'}}>Delivery: <span style={{fontWeight: 450,fontSize:'15.5px',color:"#565E64"  }}>{data.delivery_date}</span></p>
      </div>
    </div>
  )
}

export default Tracking
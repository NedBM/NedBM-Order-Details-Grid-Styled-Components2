import React from 'react'
import styled from 'styled-components'

//top button svgs
import grubhubIconWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/GrubhubIconWhite.svg'
import itemsIconWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/ItemsBagIconWhite.svg'
import messagesIconWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/MessagesIconWhite.svg'
import foodIconWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/FoodIconWhite.svg'
import reportIssuesWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/ReportIssueIconWhite.svg';
import editIconWhite from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/EditIconWhite.svg';

//List Item svgs
import originIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Origin-Vector.svg'
import recipientIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Recipient Vector.svg'
import destinationIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Destination Vector.svg'
import runnerIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Runner Vector.svg'
import durationIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Duration Vector.svg'
import paymentIconGreen from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Payment Vector.svg'


import mapImage from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/little map.png'
import ReceiptImage from '/Users/nedmoore/Desktop/f1rst-components/src/Assets/Icons/Receipt Photo.png'


const ODContainer = styled.div`
  display: grid;
  max-height: 600px;
  max-width: 600px;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 45px 45px;
  grid-row-gap: 0px;
  grid-column-gap: 5px;
  font-family: 'Inter', sans-serif;
`;

const StyledHeader = styled.div`
  display: flex;
`;

const OrderNumber = styled.h1`
  color: black;
  font-size: 24px;
  font-family: 'Red Hat Display', sans-serif;
  margin-left: 10%;
`;

const OrderStatus = styled.h2`
  color: #52AE68;
  font-size: 16px;
  font-family: 'Red Hat Display', sans-serif;
  margin-left: 10%;
  margin-top: 23px;

  &:hover {
    opacity: 0.8;
  }

`;

const ButtonsList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledIconButton = styled.button`
  background-color: #52AE68;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border-style: none;
  font-family: 'Red Hat Display', sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center; 


  &:hover {
    opacity: 0.8;
  }
  `;

const IconButtonVector = styled.img`
  height: 17px;
`;

const StyledList = styled.div`
  grid-column-start: 1; 
  grid-row: span 2;
  height: 300px;
  margin-bottom: 30px;
`;

const OrderTimeline = styled.div`
  grid-column-start: 2; 
  grid-row: span 4;
  background: #F6F7FB;
`;

const Images = styled.div`
  grid-row: span 1;
  height: 170px;
  margin-left: 7%;
  overflow: scroll;
`;


const Buttons = styled.div`
  height: 45px;
  grid-column-start: 1;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #52AE68;
  color: white;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 700;
  border-radius: 5px;
  margin: 5px;
  border-style: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Grubhub = styled.button`
  background-color: #FF465C;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center; 
  &:hover {
    opacity: 0.8;
  }
`;

const LabelList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 1px;
  padding-bottom: 1px;
  font-size: 14px;
  font-weight: 400;
`;

const LabelItem = styled.li`
  color:#757575;
  display: inline;
  display: flexbox;
  position: absolute;
`;

const LabelVector = styled.img`
  margin-left: 1%;
`;



//use mixins


const OriginItem = styled.li`
  font-weight: 700;
  display: inline;
  padding-left: 35%;
  flex-wrap: wrap;
`;


const Recipient = styled.li`
  display: inline;
  padding-left: 35%;
  flex-wrap: wrap;
`;

const RecipientPhone = styled.li`
  display: inline;
  padding-left: 35%;
`;

const Destination = styled.li`
  display: inline;
  padding-left: 35%;
`;

const Runner = styled.li`
  display: inline;
  padding-left: 35%;
`;

const RetiredRunner = styled.li`
  padding-left: 35%;
  color: #757575;
`;

const Requested = styled.li`
  display: inline;
  padding-left: 35%;
`;

const Due = styled.li`
  font-weight: 700;
  display: inline;
  padding-left: 35%;
`;

const PayType = styled.li`
  display: inline;
  padding-left: 35%;
`;

const Partner = styled.li`
  display: inline;
  padding-left: 35%;
`;

const Tip = styled.li`
  font-weight: 700;
  display: inline;
  padding-left: 35%;
`;

const RecieptPhoto = styled.img`
  margin-left: 2%
`;




//random itemsnumber to display for bags
const range = {min: 1, max: 10}, 
delta = range.max - range.min,

rand = Math.round(range.min + Math.random() * delta);

//random order status
const orderStatusArray = ['Arrived at Pickup', 'Completed', 'Order is Ready']
const orderStatus = orderStatusArray[Math.floor(Math.random() * orderStatusArray.length)];



const OrderView = () => {
    return (
      <ODContainer>
        <StyledHeader>
          <OrderNumber>#9173</OrderNumber> 
          <OrderStatus >{orderStatus}</OrderStatus>
        </StyledHeader>
        
        <ButtonsList>
          <Grubhub><img src={grubhubIconWhite} alt="grubhubIconWhite" /></Grubhub>
          <StyledIconButton><img src={itemsIconWhite} alt="itemsIconWhite" />{rand}</StyledIconButton>
          <StyledIconButton><IconButtonVector src={messagesIconWhite} alt="messagesIconWhite"/></StyledIconButton>
          <StyledIconButton><IconButtonVector src={foodIconWhite} alt="foodIconWhite"/></StyledIconButton>
          <StyledIconButton><IconButtonVector src={reportIssuesWhite} alt="reportIssuesWhite" /></StyledIconButton>
          <StyledIconButton><IconButtonVector src={editIconWhite} alt="editIconWhite"/></StyledIconButton>
        </ButtonsList>

        <StyledList>
          <LabelList>
            <LabelItem> <img src={originIconGreen} alt="originIconGreen" /> Origin</LabelItem>
            <OriginItem>My Thai Kitchen</OriginItem>
          </LabelList>
          <LabelList>
            <LabelItem> <img src={recipientIconGreen} alt="recipientIconGreen" />Recipient</LabelItem>
            <Recipient>David W</Recipient>
            <RecipientPhone>101-101-9102</RecipientPhone>
          </LabelList>
          <LabelList>
            <LabelItem> <img src={destinationIconGreen } alt="destinationIconGreen" />Destination</LabelItem>
            <Destination>2751 Whispering Lane Philadelphia, PA 19104 </Destination>

          </LabelList>
          <LabelList>
            <LabelItem> <img src={runnerIconGreen} alt="runnerIconGreen" />Runner</LabelItem>
            <Runner>Tamira J</Runner>
            <RetiredRunner>Kevin G</RetiredRunner>
          </LabelList>
          <LabelList>
            <LabelItem> <img src={durationIconGreen} alt="durationIconGreen" />Duration</LabelItem>
            <Requested>Requested: 5:22pm 09/01</Requested>
            <Due>Due: 6:30pm 09/01</Due>
          </LabelList>
          <LabelList>
            <LabelItem> <img src={paymentIconGreen} alt="paymentIconGreen" />Payment</LabelItem>
            <PayType>Online</PayType>
            <Partner>Grubhub</Partner>
            <Tip>Tip: $5.00</Tip>
          </LabelList>
          
        </StyledList>
        
        <OrderTimeline>

        
        </OrderTimeline>
        
        
        
        <Images>
          <img src={mapImage} alt="mapImage" />
          <RecieptPhoto src={ReceiptImage} alt="ReceiptImage " />
        </Images>
        
        
        
        <Buttons>
          <Button>REORDER</Button>
          <Button>REACTIVATE</Button>
          <Button>UPLOAD RECEIPT</Button>
        </Buttons>
      
      </ODContainer>
    )
}


export default OrderView
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_QD7Sf3OlZHN83aIZYk1uW7e600H7dPOarU';

   const  onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing, Inc'
            billiAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stipeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;
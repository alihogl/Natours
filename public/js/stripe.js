import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51Q99vKKf5s2ToIHOAsGEPDiPQVx2S3RklzKBaT9egqZ4ar7LbRnJt757VoyfkRbGN0GSHrdKYm3YlZJQ1fAyCMzz00VrlUOGVG',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

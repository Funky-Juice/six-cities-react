import {offerPropTypes} from '../../prop-types/prop-types';
import OfferCard from '../offer-card/offer-card';

const OffersListNearby = (props) => {
  const {activeOffer, activeOffers} = props;

  if (!activeOffers) {
    return <></>;
  }

  return <>
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>

      <div className="near-places__list places__list">
        {activeOffers.map((offer) => {
          if (offer.id === activeOffer.id) {
            return null;
          }
          return <OfferCard
            key={`offer-${offer.id}`}
            offer={offer}
            showOffer={() => {}}
          />;
        })}
      </div>
    </section>
  </>;
};

OffersListNearby.propTypes = {
  activeOffer: offerPropTypes,
  activeOffers: PropTypes.arrayOf(offerPropTypes)
};

export default OffersListNearby;
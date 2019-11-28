import {offerPropTypes} from '../../prop-types/prop-types';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import OffersListTitle from '../offers-list-title/offers-list-title';
import OffersListSort from '../offers-list-sort/offers-list-sort';
import OffersList from '../offers-list';

const OffersListSortWrapped = withActiveItem(OffersListSort);

const OffersListContainer = (props) => {
  const {activeCity, activeOffers} = props;

  if (activeOffers.length) {
    return <>
      <section className="cities__places places">
        <OffersListTitle
          activeCity={activeCity}
          activeOffers={activeOffers}
        />
        <OffersListSortWrapped/>
        <OffersList/>
      </section>
    </>;
  } else {
    return <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale</p>
        </div>
      </section>
    </>;
  }
};

OffersListContainer.propTypes = {
  activeOffers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    })
  }).isRequired
};

export default OffersListContainer;

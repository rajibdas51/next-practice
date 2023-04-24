import Link from 'next/link';
import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Button from '../ui/button';
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt='' />
      <div className='classes.content'>
        <div className='classes.summary'>
          <h2>{title}</h2>
          <div className='classes.date'>
            <span className={classes.dateicon}>
              <DateIcon></DateIcon>
            </span>

            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon className={classes.icon}></AddressIcon>
            <adress>{formattedAddress}</adress>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            {' '}
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
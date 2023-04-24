import { useRouter } from 'next/router';
import { getEventById } from '../../dummyData';
import { Fragment } from 'react';
function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event Found!</p>;
  }
  return <Fragment></Fragment>;
}

export default EventDetailPage;

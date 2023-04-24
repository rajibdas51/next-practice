import { useRouter } from 'next/router';
import { getEventById } from '../../dummyData';
function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event Found!</p>;
  }
  return (
    <div>
      <h1> This is event detail Page.</h1>
    </div>
  );
}

export default EventDetailPage;

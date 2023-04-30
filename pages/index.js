import { getFeaturedEvents } from '../dummyData';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

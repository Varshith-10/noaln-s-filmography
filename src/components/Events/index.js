import {Component} from 'react'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/5/55/Following_film_poster.jpg',
    name: 'Following',
    location: '1998',
    registrationStatus: 'DONE',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg',
    name: 'Memento',
    location: '2000',
    registrationStatus: 'DONE',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/7/7c/Insomnia2002Poster.jpg',
    name: 'Insomnia',
    location: '2002',
    registrationStatus: 'DONE',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/a/af/Batman_Begins_Poster.jpg',
    name: 'Batman Begins',
    location: '2005',
    registrationStatus: 'DONE',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg',
    name: 'The Prestige',
    location: '2006',
    registrationStatus: 'DONE',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
    name: 'The Dark Knight',
    location: '2008',
    registrationStatus: 'DONE',
  },
  {
    id: '2002',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    name: 'Inception',
    location: '2010',
    registrationStatus: 'DONE',
  },
  {
    id: '2003',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
    name: 'The Dark Knight Rises',
    location: '2012',
    registrationStatus: 'DONE',
  },
  {
    id: '2004',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    name: 'Interstellar',
    location: '2014',
    registrationStatus: 'DONE',
  },
  {
    id: '2005',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg',
    name: 'Dunkirk',
    location: '2017',
    registrationStatus: 'DONE',
  },
  {
    id: '2006',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    name: 'Tenet',
    location: '2020',
    registrationStatus: 'DONE',
  },
  {
    id: '2007',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
    name: 'Oppenheimer',
    location: '2023',
    registrationStatus: 'DONE',
  },
]
// Write your code here
class Events extends Component {
  state = {
    activeEventId: '',
  }

  getActiveEventRegistrationStatus = () => {
    const {activeEventId} = this.state
    const activeEventDetails = eventsList.find(
      event => event.id === activeEventId,
    )
    if (activeEventDetails) {
      return activeEventDetails.id
    }
    return ''
  }

  setActiveEventId = id => {
    this.setState({activeEventId: id})
  }

  renderEventsList = () => {
    const {activeEventId} = this.state
    return (
      <ul className="events-list">
        {eventsList.map(eachEvent => (
          <EventItem
            key={eachEvent.id}
            eventDetails={eachEvent}
            setActiveEventId={this.setActiveEventId}
            isActive={eachEvent.id === activeEventId}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="events-container">
        <div className="events-content">
          <h1 className="heading">Christopher Nolan Filmography </h1>
          {this.renderEventsList()}
        </div>
        <ActiveEventRegistrationDetails
          activeEventRegistrationStatus={this.getActiveEventRegistrationStatus()}
        />
      </div>
    )
  }
}

export default Events

import { collectionStore } from '@/stores/CollectionStore'
import { TrackCollection } from '../TrackCollection'
import './index.scss'

// REVIEW: бесполезный компонент по сути
export const TracksCollection = () => {
  return (
    <div className="tracks-collection">
      {collectionStore.tracks.map(track => (
        <TrackCollection
          key={track.id}
          track={track}
        />
      ))}
    </div>
  )
}

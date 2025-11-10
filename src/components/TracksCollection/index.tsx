import { collectionStore } from '@/stores/CollectionStore'
import { TrackCollection } from '../TrackCollection'

export const TracksCollection = () => {
  return (
    <>
      <div className="flex flex-row gap-[1.5rem]">
        {collectionStore.tracks.map(track => (
          <TrackCollection
            key={track.id}
            track={track}
          />
        ))}
      </div>
    </>
  )
}

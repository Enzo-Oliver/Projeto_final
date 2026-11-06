function Status() {
  const stories = [
    { id: 1, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 2, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 3, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 4, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 5, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 6, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 7, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 8, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 9, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 10, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 11, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 12, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 13, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 14, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 15, name: 'usuario', img: 'https://placehold.co/100x100' },
    { id: 16, name: 'usuario', img: 'https://placehold.co/100x100' },
  ];

  return (
    <div className="container py-3">
      <div className="card border-0 shadow-sm p-3">
        <div className="d-flex gap-3 overflow-x-auto pb-2">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="d-flex flex-column align-items-center text-center flex-shrink-0"
              style={{ width: '70px' }}
            >
              <div className="p-1">
                <img
                  src={story.img}
                  className="rounded-circle img-fluid border border-2 border-white d-block"
                  alt={story.name}
                  style={{ width: '56px', height: '56px', objectFit: 'cover' }}
                />
              </div>
              <span className="small text-truncate w-100 mt-1" style={{ fontSize: '0.75rem' }}>
                {story.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
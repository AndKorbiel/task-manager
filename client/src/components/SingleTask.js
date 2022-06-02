function SingleTask({ data }) {
  const encodeTaskStatus = (status) => {
    let label = "";

    switch (status) {
      case 0: {
        label = "New";
        break;
      }
      case 1: {
        label = "Pending";
        break;
      }
      case 2: {
        label = "Closed";
        break;
      }
      default: {
        label = "New";
      }
    }

    return label;
  };

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <button>{encodeTaskStatus(data.status)}</button>
    </div>
  );
}

export default SingleTask;

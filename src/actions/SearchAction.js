export const getAlbumList = () => {

  let list = {
    "resultCount": 2,
    "results": [
      {
        "wrapperType": "track",
      },
      {
        "wrapperType": "track",
      }
    ]
  };
  console.log('inside action', list.results);

  return {
    type: 'get_albums',
    payload: list
  }
}

//export const boundgetAlbumList = item => dispatch(getAlbumList(item))

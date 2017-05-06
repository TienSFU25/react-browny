import 'whatwg-fetch';
declare var fetch: any;

export function GetTopStories(skip = 0) {
    return fetch(`http://oneservice-eastus-int.cloudapp.net/News/TopStories/?$top=100&$skip=${skip}&$select=url,sourceId,title,abstract,images,categories,provider,publishedDateTime&$orderby=publishedDateTime`)
      .then(function(response) {
        return response.text()
      });
};
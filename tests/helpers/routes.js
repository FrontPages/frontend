var headers = { 'Content-Type': 'application/json' },
    createEndpoint = function(endpoint) {
      endpoint.handler = endpoint.handler.bind(endpoint);
      return endpoint;
    },
    defaultHandler = function() {
      return [200, headers, JSON.stringify(this.mockJSON)];
    };

export function headlines() {
  return createEndpoint({
    url: '/headlines',
    handler: defaultHandler,
    mockJSON: {
      headlines: [
        { id: 1, snapshot_id: 1, title: 'Title' },
        { id: 2, snapshot_id: 1, title: 'Title 2' }
      ]
    }
  });
}

export function sites() {
  return createEndpoint({
    url: '/sites',
    handler: defaultHandler,
    mockJSON: {
      sites: [
        { id: 1, name: 'Site 1' },
        { id: 2, name: 'Site 2' }
      ]
    }
  });
}

export function snapshots() {
  return createEndpoint({
    url: '/snapshots',
    handler: defaultHandler,
    mockJSON: {
      snapshots: [
        { id: 1, site_id: 1, file_path: '1.jpg' },
        { id: 2, site_id: 1, file_path: '2.jpg' }
      ]
    }
  });
}

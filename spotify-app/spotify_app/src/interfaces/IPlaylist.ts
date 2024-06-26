export interface ISpotifyPlaylist {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          any;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}

export interface Owner {
    display_name:  any;
    external_urls: ExternalUrls;
    href:          string;
    id:            any;
    type:          any;
    uri:           any;
}

export interface Tracks {
    href:  string;
    total: number;
}

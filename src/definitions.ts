import type { PluginListenerHandle } from "@capacitor/core";

export interface ActionResult {
  result: boolean;
}

export interface EchoOptions {
  value: string;
}

export interface EchoResult {
  value: string;
}

export interface ConfigureOptions {
  config: MusicKit.Configuration;
}

export interface GetMultiDataOptions {
  ids?: string[];
  limit: number;
  offset: number;
}

export type GetLibraryArtistsOptions = {
  albumId?: string;
} & GetMultiDataOptions;

export type GetLibraryArtistsResult =
  MusicKit.Relationship<MusicKit.LibraryArtists>;

export type GetLibraryAlbumsResult =
  MusicKit.Relationship<MusicKit.LibraryAlbums>;

export type GetLibrarySongsResult =
  MusicKit.Relationship<MusicKit.LibrarySongs>;

export type GetLibraryPlaylistsResult =
  MusicKit.Relationship<MusicKit.LibraryPlaylists>;

export type GetRatingsOptions = {
  ids: string[];
  type: MusicKit.Music.RatingType;
};

export type RatingsResult = MusicKit.Relationship<MusicKit.Ratings>;

export type AddRatingOptions = {
  id: string;
  type: MusicKit.Music.RatingType;
  value: MusicKit.Rating;
};

export type DeleteRatingOptions = {
  id: string;
  type: MusicKit.Music.RatingType;
};

export interface GetCurrentSongResult {
  item?: MusicKit.MediaItem;
}

export interface GetQueueSongsResult {
  items: MusicKit.MediaItem[];
}

export interface GetCurrentIndexResult {
  index: number;
}

export interface GetCurrentPlaybackTimeResult {
  time: number;
}

export interface getRepeatModeResult {
  mode: "none" | "one" | "all";
}

export interface SetRepeatModeOptions {
  mode: "none" | "one" | "all";
}

export interface SetQueueOptions {
  ids: string[];
}

export interface PlayOptions {
  index?: number;
}

export interface SeekToTimeOptions {
  time: number;
}

export type PlaybackState = keyof typeof MusicKit.PlaybackStates;

export type PlaybackStateDidChangeResult = {
  state: PlaybackState;
};

export type PlaybackStateDidChangeListener = (
  data: PlaybackStateDidChangeResult
) => void;

export type NowPlayingItemDidChangeResult = {
  index: number;
  item: MusicKit.MediaItem | undefined;
};

export type NowPlayingItemDidChangeListener = (
  data: NowPlayingItemDidChangeResult
) => void;

export type AuthorizationStatus =
  | "unavailable"
  | "notDetermined"
  | "denied"
  | "restricted"
  | "authorized";

export type AuthorizationStatusDidChangeResult = {
  status: AuthorizationStatus;
};

export type AuthorizationStatusDidChangeListener = (
  data: AuthorizationStatusDidChangeResult
) => void;

export interface CapacitorMusicKitPlugin {
  addListener(
    eventName: "playbackStateDidChange",
    listenerFunc: PlaybackStateDidChangeListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  addListener(
    eventName: "nowPlayingItemDidChange",
    listenerFunc: NowPlayingItemDidChangeListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  addListener(
    eventName: "authorizationStatusDidChange",
    listenerFunc: AuthorizationStatusDidChangeListener
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  addRating(options: AddRatingOptions): Promise<RatingsResult>;
  authorize(): Promise<void>;
  configure(options: ConfigureOptions): Promise<ActionResult>;
  deleteRating(options: DeleteRatingOptions): Promise<RatingsResult>;
  echo(options: EchoOptions): Promise<EchoResult>;
  getCurrentIndex(): Promise<GetCurrentIndexResult>;
  getCurrentPlaybackTime(): Promise<GetCurrentPlaybackTimeResult>;
  getCurrentSong(): Promise<GetCurrentSongResult>;
  getLibraryAlbums(
    options: GetMultiDataOptions
  ): Promise<GetLibraryAlbumsResult>;
  getLibraryArtists(
    options: GetLibraryArtistsOptions
  ): Promise<GetLibraryArtistsResult>;
  getLibraryPlaylists(
    options: GetMultiDataOptions
  ): Promise<GetLibraryPlaylistsResult>;
  getLibrarySongs(options: GetMultiDataOptions): Promise<GetLibrarySongsResult>;
  getQueueSongs(): Promise<GetQueueSongsResult>;
  getRatings(options: GetRatingsOptions): Promise<RatingsResult>;
  getRepeatMode(): Promise<getRepeatModeResult>;
  hasMusicSubscription(): Promise<ActionResult>;
  isAuthorized(): Promise<ActionResult>;
  nextPlay(): Promise<ActionResult>;
  pause(): Promise<ActionResult>;
  play(options: PlayOptions): Promise<ActionResult>;
  previousPlay(): Promise<ActionResult>;
  seekToTime(options: SeekToTimeOptions): Promise<ActionResult>;
  setQueue(options: SetQueueOptions): Promise<ActionResult>;
  setRepeatMode(options: SetRepeatModeOptions): Promise<ActionResult>;
  stop(): Promise<ActionResult>;
  unauthorize(): Promise<void>;
}

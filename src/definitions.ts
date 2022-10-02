import type { PluginListenerHandle } from '@capacitor/core';

export interface CapacitorMusicKitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  configure(options: { config: MusicKit.Config }): Promise<{ result: boolean }>;
  isAuthorized(): Promise<{ result: boolean }>;
  hasMusicSubscription(): Promise<{ result: boolean }>;
  authorize(): Promise<void>;
  unauthorize():  Promise<void>;
  getLibraryAlbums(options: {
    limit: number;
    offset: number;
  }): Promise<{
    albums: {
      id: string;
      title: string;
      artworkUrl?: string;
    }[];
    hasNext: boolean;
  }>;
  addListener(
    eventName: 'playbackStateDidChange',
    listenerFunc: PlaybackStateDidChangeListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
  addListener(
    eventName: 'authorizationStatusDidChange',
    listenerFunc: AuthorizationStatusDidChangeListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
export interface EchoOptions {
  value: string;
}

export interface EchoResult {
  value: string;
}

export type PlaybackStates = keyof typeof MusicKit.PlaybackStates;

export type PlaybackStateDidChangeListener = (state: {
  result: PlaybackStates;
}) => void;

export type AuthorizationStatus =
  | 'unavailable'
  | 'notDetermined'
  | 'denied'
  | 'restricted'
  | 'authorized';

export type AuthorizationStatusDidChangeListener = (state: {
  result: AuthorizationStatus;
}) => void;

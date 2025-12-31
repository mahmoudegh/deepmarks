export type SerializableFile = {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  data: string; // base64 encoded file data
}

export interface CustomHeadTagsProps {
  baseUrl: string;
  geoPlacename: string;
  geoPosition: string;
  geoRegion: string;
  icbm: string;
}

const CustomHeadTags: React.FC<CustomHeadTagsProps> = ({
  baseUrl,
  geoPlacename,
  geoPosition,
  geoRegion,
  icbm,
}) => (
  <head>
    <base href={baseUrl} />
    <meta name="geo.placename" content={geoPlacename} />
    <meta
      name="geo.position"
      content={geoPosition}
    />
    <meta name="geo.region" content={geoRegion} />
    <meta name="ICBM" content={icbm} />
  </head>
);

export default CustomHeadTags;

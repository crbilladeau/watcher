import React, { useContext } from 'react';
import {
  TabsStyles,
  SingleTab,
  ListTabs,
  TabWindow,
  SubTabWindow,
  SubMenu,
} from '../styles/TabStyles';

import { GlobalContext } from '../context/GlobalState';

const TabInfo = ({ show, showId, seasons }) => {
  const { getEpisodes, episodes } = useContext(GlobalContext);

  const handleClick = (season) => {
    const episodes = getEpisodes(showId, season);

    return episodes;
  };
  console.log(episodes);

  const baseImageUrl = 'https://image.tmdb.org/t/p/original';
  episodes.map(
    (episode) => (episode.imagePath = baseImageUrl.concat(episode.still_path))
  );

  return (
    <>
      <TabsStyles>
        <ListTabs>
          <SingleTab>Overview</SingleTab>
          <SingleTab>Episodes</SingleTab>
          <SingleTab>Trailers & More</SingleTab>
          <SingleTab>More Like This</SingleTab>
          <SingleTab>Details</SingleTab>
        </ListTabs>

        <TabWindow>
          <p>{show.overview}</p>
        </TabWindow>

        {/* seasons and episode lists*/}

        <TabWindow>
          <TabsStyles>
            {seasons.map((season) => (
              <ListTabs onClick={() => handleClick(season.season_number)}>
                <SingleTab>Season {season.season_number}</SingleTab>
              </ListTabs>
            ))}

            {seasons.map((season) => (
              <SubTabWindow>
                <p>{season.overview}</p>
                <SubMenu>
                  {episodes.map((episode) => (
                    <div>
                      <h4>{episode.name}</h4>
                      <img
                        src={episode.imagePath}
                        alt={`${episode.name} still`}
                      />
                    </div>
                  ))}
                </SubMenu>
              </SubTabWindow>
            ))}
          </TabsStyles>
        </TabWindow>

        {/* trailers and more */}
        <TabWindow>
          <p>Trailers</p>
        </TabWindow>

        {/* more like this*/}
        <TabWindow>
          <p>More Like This</p>
        </TabWindow>

        {/* Details */}
        <TabWindow>
          <p>Details</p>
        </TabWindow>
      </TabsStyles>
    </>
  );
};

export default TabInfo;

import { profile } from '../profile'
import Section from './Section'

export default function Games() {
  return (
    <Section id="games" title="즐기는 게임" tone="dark">
      <ul className="games">
        {profile.games.map((game) => (
          <li key={game.storeUrl} className="game-card">
            <img
              className="game-screenshot"
              src={game.screenshot}
              alt={`${game.name} 스크린샷`}
              width={600}
              height={338}
              loading="lazy"
            />
            <div className="game-body">
              <h3 className="game-name">
                <a href={game.storeUrl} target="_blank" rel="noreferrer">
                  {game.name}
                </a>
              </h3>
              <p className="game-description">{game.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

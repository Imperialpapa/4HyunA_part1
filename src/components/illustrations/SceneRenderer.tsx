import { RabbitScenes } from './RabbitScenes';
import { BearScenes } from './BearScenes';
import { FoxScenes } from './FoxScenes';
import { PenguinScenes } from './PenguinScenes';
import { OwlScenes } from './OwlScenes';
import { DuckScenes } from './DuckScenes';

const sceneMap: Record<string, React.FC> = {
  ...RabbitScenes,
  ...BearScenes,
  ...FoxScenes,
  ...PenguinScenes,
  ...OwlScenes,
  ...DuckScenes,
};

export function SceneRenderer({ sceneKey }: { sceneKey: string }) {
  const Scene = sceneMap[sceneKey];
  if (!Scene) return <div style={{ fontSize: '80px', textAlign: 'center' }}>🌲</div>;
  return <Scene />;
}

import { motion } from 'framer-motion';

const statNames = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};

const StatsChart = ({ stats }) => {
  return (
    <div className="space-y-3">
      {stats.map((stat) => (
        <div key={stat.name} className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-3 md:col-span-2 text-sm text-gray-400 capitalize">
            {statNames[stat.name] || stat.name}
          </div>
          <div className="col-span-1 text-xs text-gray-500">
            {stat.value}
          </div>
          <div className="col-span-8 md:col-span-9">
            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(stat.value / 255) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-full ${
                  stat.value > 100 ? 'bg-green-500' : 
                  stat.value > 75 ? 'bg-blue-500' : 
                  stat.value > 50 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsChart;
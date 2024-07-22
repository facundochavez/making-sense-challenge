import styles from './PlatformModal.module.scss';
import { Modal } from 'antd';
import { useModalContext } from '@/context/Modal.context';
import Image from 'next/image';
import statsData from '@/data/stats.data.json';
import getFollowersTerm from '@/utils/followersTerm';
import getDateRange from '@/utils/dateRange';
import { Stat } from '@/types';
import formatNumber from '@/utils/numberFormatter';
import ChangeIndicator from '@/components/ChangeIndicator/ChangeIndicator';
import FollowersChart from '@/components/FollowersChart/FollowersChart';
const stats: Stat[] = statsData as Stat[];
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const PlatformModal = () => {
  // Extract modal context values
  const { isModalOpen, closeModal, activePlatform } = useModalContext();

  // Find the stat corresponding to the active platform
  const stat: Stat | undefined = stats.find(
    (stat) => stat.platform === activePlatform
  );

  // Return null if no stat is found
  if (!stat) return null;

  // Get term and date range for the active platform
  const followersTerm = getFollowersTerm(activePlatform);
  const dateRange = getDateRange();

  // Calculate total followers over the last ten days
  const FOLLOWERS_SUM = stat.lastTenDays.reduce((sum, day) => sum + day, 0);

  return (
    <Modal
      className={`${inter.className} ${styles.platform_modal}`}
      open={isModalOpen}
      onCancel={closeModal}
      footer={null}
      destroyOnClose
    >
      <header>
        <h2>
          {stat.platform === 'youtube'
            ? 'YouTube'
            : stat.platform.charAt(0).toUpperCase() +
              stat.platform.slice(1) +
              ' ' +
              followersTerm}
        </h2>
        <span>
          <Image
            src={`/icons/icon-${stat.platform}.svg`}
            alt={stat.platform}
            width={20}
            height={20}
          />
          {stat.username}
        </span>

        <section>
          <ul>
            <li>
              <p>{formatNumber(stat.value)}</p>
              <span style={{ maxWidth: '80px' }}>Total {followersTerm}</span>
            </li>
            <li>
              <ChangeIndicator change={FOLLOWERS_SUM} isBig />
              <span style={{ maxWidth: '130px', minWidth: '115px' }}>
                New {followersTerm} in the past 10 days
              </span>
            </li>
            <li>
              <ChangeIndicator change={stat.lastTenDays[9]} isBig />
              <span style={{ maxWidth: '115px' }}>
                New {followersTerm} TODAY
              </span>
            </li>
          </ul>
        </section>
      </header>

      <main>
        <h3>{dateRange}</h3>
        <section>
          <div style={{ minWidth: '700px' }}>
            <FollowersChart stat={stat} followersTerm={followersTerm} />
          </div>
        </section>
      </main>
    </Modal>
  );
};

export default PlatformModal;

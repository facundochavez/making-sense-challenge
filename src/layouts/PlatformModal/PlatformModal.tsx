import styles from './PlatformModal.module.scss';
import { Modal } from 'antd';
import { useModalContext } from '@/context/modal.context';
import Image from 'next/image';
import statsData from '@/data/stats.data.json';
import getFollowTerm from '@/utils/followTerm';
import { Stat } from '@/types';
import { formatNumber } from '@/utils/numberFormatter';
import ChangeIndicator from '@/components/ChangeIndicator/ChangeIndicator';
const stats: Stat[] = statsData as Stat[];

const PlatformModal = () => {
  const { isModalOpen, closeModal, activePlatform } = useModalContext();
  const stat: Stat | undefined = stats.find(
    (stat) => stat.platform === activePlatform
  );
  const followTerm = getFollowTerm(activePlatform);

  if (!stat) {
    return null;
  }

  const FOLLOWERS_SUM = stat.lastTenDays.reduce((sum, day) => sum + day, 0);

  //// COMPONENT
  return (
    <Modal
      className={styles.platform_modal}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
    >
      <>
        <header>
          <h2>
            {stat.platform.charAt(0).toUpperCase() +
              stat.platform.slice(1) +
              ' ' +
              followTerm}
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
          <main>
            <section>
              <p>{formatNumber(stat.value)}</p>
              <span style={{ maxWidth: '80px' }}>Total {followTerm}</span>
            </section>
            <section>
              <ChangeIndicator change={FOLLOWERS_SUM} isBig />
              <span style={{ maxWidth: '130px', minWidth: '115px' }}>
                New {followTerm} in the past 10 days
              </span>
            </section>
            <section>
              <ChangeIndicator change={stat.lastTenDays[9]} isBig />
              <span style={{ maxWidth: '115px' }}>New {followTerm} TODAY</span>
            </section>
          </main>
        </header>
      </>
    </Modal>
  );
};

export default PlatformModal;

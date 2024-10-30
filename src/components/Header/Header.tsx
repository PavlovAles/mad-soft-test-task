import { Flex } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import Text from 'antd/es/typography/Text';

import { RESUME_LINK } from '@/constants/resume';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <AntdHeader className={styles.header}>
      <Flex align='center' justify='space-between' gap={20} className={styles.header__content}>
        <Text>
          Тестовое задание от компании{' '}
          <Link href={'mad-soft.ru'} target='_blank'>
            MAD&nbsp;SOFT
          </Link>
        </Text>
        <Link href={RESUME_LINK} target='_blank'>
          Алесь Павлов
        </Link>
      </Flex>
    </AntdHeader>
  );
};

import { useCallback, useEffect, useState } from 'react';

import { isSupabaseReady, supabase } from '../lib/supabase.js';

const TABLE_NAME = 'guestbook';
const FETCH_LIMIT = 50;

/**
 * 방명록 목록 조회 / 작성 훅
 * - Supabase 환경변수가 없으면 '미리보기 모드'로 동작 (브라우저 메모리에만 저장)
 *
 * @returns {{ entries: Array, isLoading: boolean, errorMessage: string, isPreviewMode: boolean, addEntry: function }}
 */
function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(isSupabaseReady);
  const [errorMessage, setErrorMessage] = useState('');

  /** 처음 화면에 들어왔을 때 Supabase 에서 최신 방명록을 불러온다 */
  useEffect(() => {
    if (!isSupabaseReady) {
      return undefined;
    }
    let isCancelled = false;

    supabase
      .from(TABLE_NAME)
      .select('id, name, message, avatar, created_at')
      .order('created_at', { ascending: false })
      .limit(FETCH_LIMIT)
      .then(({ data, error }) => {
        if (isCancelled) {
          return;
        }
        if (error) {
          setErrorMessage('방명록을 불러오지 못했어요. 잠시 후 다시 시도해주세요.');
        } else {
          setEntries(data);
        }
        setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  /**
   * 방명록을 작성한다
   * @param {{ name: string, message: string, avatar: string }} entry - 작성 내용
   * @returns {Promise<boolean>} 성공 여부
   */
  const addEntry = useCallback(async ({ name, message, avatar }) => {
    if (!isSupabaseReady) {
      const previewEntry = {
        id: `preview-${ Date.now() }`,
        name,
        message,
        avatar,
        created_at: new Date().toISOString(),
      };
      setEntries((prev) => [previewEntry, ...prev]);
      return true;
    }

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({ name, message, avatar })
      .select('id, name, message, avatar, created_at')
      .single();

    if (error) {
      setErrorMessage('방명록을 저장하지 못했어요. 잠시 후 다시 시도해주세요.');
      return false;
    }
    setErrorMessage('');
    setEntries((prev) => [data, ...prev]);
    return true;
  }, []);

  return {
    entries,
    isLoading,
    errorMessage,
    isPreviewMode: !isSupabaseReady,
    addEntry,
  };
}

export default useGuestbook;

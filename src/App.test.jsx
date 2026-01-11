import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { initializeTimes, updateTimes } from './App';

// Mock the fetchAPI function from the external API script
const mockFetchAPI = vi.fn();

describe('Booking Times Reducer Functions', () => {
  beforeEach(() => {
    // Setup: Mock window.fetchAPI before each test
    global.window = {
      fetchAPI: mockFetchAPI
    };
    mockFetchAPI.mockClear();
  });

  afterEach(() => {
    // Cleanup: Reset mocks after each test
    vi.clearAllMocks();
  });

  describe('initializeTimes', () => {
    it('should call fetchAPI with today\'s date', () => {
      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      mockFetchAPI.mockReturnValue(mockTimes);

      const result = initializeTimes();

      expect(mockFetchAPI).toHaveBeenCalled();
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
      expect(result).toEqual(mockTimes);
    });

    it('should return the correct initial available times from API', () => {
      const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
      mockFetchAPI.mockReturnValue(expectedTimes);

      const result = initializeTimes();

      expect(result).toEqual(expectedTimes);
      expect(result).toHaveLength(6);
    });

    it('should return an array', () => {
      const mockTimes = ['17:00', '18:00'];
      mockFetchAPI.mockReturnValue(mockTimes);

      const result = initializeTimes();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return fallback times when API is not available', () => {
      // Remove fetchAPI from window to test fallback
      global.window = {};

      const result = initializeTimes();

      expect(result).toHaveLength(6);
      expect(result).toContain('17:00');
    });
  });

  describe('updateTimes', () => {
    it('should call fetchAPI with the selected date when UPDATE_TIMES action is dispatched', () => {
      const currentState = ['17:00', '18:00'];
      const mockNewTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockNewTimes);

      const action = {
        type: 'UPDATE_TIMES',
        payload: { date: '2026-01-15' }
      };

      const result = updateTimes(currentState, action);

      expect(mockFetchAPI).toHaveBeenCalled();
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.any(Date));
      expect(result).toEqual(mockNewTimes);
    });

    it('should return different times based on different dates from API', () => {
      const currentState = ['17:00', '18:00'];

      // Mock different times for first date
      mockFetchAPI.mockReturnValueOnce(['17:00', '18:00', '19:00']);
      const action1 = {
        type: 'UPDATE_TIMES',
        payload: { date: '2026-01-20' }
      };
      const result1 = updateTimes(currentState, action1);

      // Mock different times for second date
      mockFetchAPI.mockReturnValueOnce(['20:00', '21:00', '22:00']);
      const action2 = {
        type: 'UPDATE_TIMES',
        payload: { date: '2026-02-14' }
      };
      const result2 = updateTimes(currentState, action2);

      // Results should be different based on API response
      expect(result1).toHaveLength(3);
      expect(result2).toHaveLength(3);
      expect(result1).not.toEqual(result2);
    });

    it('should return the current state for unknown action types', () => {
      const currentState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];

      const action = {
        type: 'UNKNOWN_ACTION',
        payload: {}
      };

      const result = updateTimes(currentState, action);

      expect(result).toEqual(currentState);
      expect(mockFetchAPI).not.toHaveBeenCalled();
    });

    it('should return current state when API is not available', () => {
      // Remove fetchAPI from window to test fallback
      global.window = {};

      const currentState = ['17:00', '18:00'];
      const action = {
        type: 'UPDATE_TIMES',
        payload: { date: '2026-01-15' }
      };

      const result = updateTimes(currentState, action);

      expect(result).toEqual(currentState);
    });

    it('should return an array', () => {
      const currentState = ['17:00', '18:00'];
      const mockTimes = ['18:00', '19:00'];
      mockFetchAPI.mockReturnValue(mockTimes);

      const action = { type: 'UPDATE_TIMES', payload: { date: '2026-01-15' } };

      const result = updateTimes(currentState, action);

      expect(Array.isArray(result)).toBe(true);
    });
  });
});

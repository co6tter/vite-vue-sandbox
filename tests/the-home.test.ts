import { render } from "@testing-library/vue";
import { createPinia } from "pinia";
import { vi } from "vitest";
import { nextTick } from "vue";

import { lockResource, releaseResource, sendHeartbeat } from "@/mocks/mockApi";
import TheHome from "@/views/TheHome.vue";

vi.mock("@/mocks/mockApi", () => ({
  lockResource: vi.fn(),
  releaseResource: vi.fn(),
  sendHeartbeat: vi.fn(),
}));

describe("TheHome.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("locks the resource on mount", async () => {
    render(TheHome, {
      global: {
        plugins: [createPinia()],
      },
    });

    await vi.runOnlyPendingTimersAsync();
    expect(lockResource).toHaveBeenCalledWith("the-home-resource");
  });

  it("sends a heartbeat periodically", async () => {
    render(TheHome, {
      global: {
        plugins: [createPinia()],
      },
    });

    await nextTick();
    expect(sendHeartbeat).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(5000);
    expect(sendHeartbeat).toHaveBeenCalledTimes(2);
  });

  it("releases the resource on unmount", async () => {
    const { unmount } = render(TheHome, {
      global: {
        plugins: [createPinia()],
      },
    });

    unmount();
    await vi.runOnlyPendingTimersAsync();
    expect(releaseResource).toHaveBeenCalledWith("the-home-resource");
  });
});

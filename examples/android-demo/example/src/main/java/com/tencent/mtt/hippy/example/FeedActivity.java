package com.tencent.mtt.hippy.example;

public class FeedActivity extends AsyncHippyActivity {
    @Override
    protected String getModuleName() {
        return "feed";
    }

    @Override
    protected String getModulePath() {
        return "feed.android.js";
    }
}

package com.tencent.mtt.hippy.example;

public class DetailActivity extends AsyncHippyActivity {
    @Override
    protected String getModuleName() {
        return "detail";
    }

    @Override
    protected String getModulePath() {
        return "detail.android.js";
    }
}

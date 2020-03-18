#ifndef CORE_MODULES_TEST_MODULE_H_
#define CORE_MODULES_TEST_MODULE_H_

#include "core/modules/module-base.h"
#include "core/napi/callback-info.h"
#include "core/napi/js-native-api-types.h"
class TestModule : public ModuleBase {
 public:
  explicit TestModule(hippy::napi::napi_context context){};
  void RetStr(const hippy::napi::CallbackInfo& info);
  void Print(const hippy::napi::CallbackInfo& info);
};

#endif  // CORE_MODULES_TEST_MODULE_H_
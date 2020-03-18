#include "core/modules/test-module.h"
#include "core/base/logging.h"
#include "core/environment.h"
#include "core/modules/module-register.h"
#include "core/napi/js-native-api.h"
REGISTER_MODULE(TestModule, RetStr)
REGISTER_MODULE(TestModule, Print)
void TestModule::RetStr(const hippy::napi::CallbackInfo& info) {
  std::shared_ptr<Environment> env = info.GetEnv();
  hippy::napi::napi_context context = env->getContext();
  HIPPY_CHECK(context);
  info.GetReturnValue()->Set(
      hippy::napi::napi_create_string(context, "hello world"));
}

void TestModule::Print(const hippy::napi::CallbackInfo& info) {
  std::shared_ptr<Environment> env = info.GetEnv();

<script setup lang="ts">
const show = ref(false);

const { login } = useAuth();
const state = ref({
  username: "",
  password: "",
});

const toast = useToast();
function onSubmit(event: any) {
  login({ ...event.data }).then((success) => {
    if (success) {
      toast.add({
        title: "Success",
        description: "The form has been submitted.",
        color: "success",
      });
      navigateTo("/dashboard");
    } else {
      console.error("Login failed", success);
      toast.add({
        title: "Fail",
        description: "Login failed.",
        color: "error",
      });
    }
  });
}
</script>

<template>
  <div class="flex min-h-screen gap-4 p-4">
    <Card class="max-w-md m-auto">
      <template #header>
        <div class="text-center">
          <UIcon name="i-mdi-light:account" class="size-14 text-white" />
          <h1 class="text-white">Login</h1>
          <h3 class="break-keep">
            Enter your credentials to access your account.
          </h3>
          <Button
            class="w-full justify-center gap-4 mt-5"
            color="neutral"
            variant="outline"
            label="Google"
            icon="i-simple-icons-google"
          />
          <Button
            class="w-full justify-center gap-4 mt-2"
            color="neutral"
            variant="outline"
            label="GitHub"
            icon="i-simple-icons-github"
          />
        </div>
      </template>
      <div class="flex flex-col gap-4">
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField class="w-full" required label="Username" name="username">
            <UInput
              class="w-full"
              placeholder="Enter your username"
              v-model="state.username"
            />
          </UFormField>

          <UFormField
            label="Password"
            auto-complete="off"
            required
            name="password"
          >
            <UInput
              class="w-full"
              v-model="state.password"
              placeholder="Enter your password"
              :type="show ? 'text' : 'password'"
              :ui="{ trailing: 'pe-1' }"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="sm"
                  :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                  :aria-label="show ? 'Hide password' : 'Show password'"
                  :aria-pressed="show"
                  aria-controls="password"
                  @click="show = !show"
                />
              </template>
            </UInput>
          </UFormField>

          <UButton class="justify-center w-full mt-10" type="submit">
            Submit
          </UButton>
        </UForm>
      </div>
    </Card>
  </div>
</template>

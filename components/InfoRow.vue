<template>
  <tr class="info-row">
    <td class="info-label">
      <Icon :name="icon" />
      <span>{{ label }}</span>
    </td>
    <td class="info-value">
      <span>{{ value }}</span>
    </td>
  </tr>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  value: string
}>()
</script>

<style scoped>
.info-row {
  border-bottom: 1px solid #000;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  color: #333;
  font-weight: 500;
  font-size: 16px;
  padding: 15px 20px;
  width: 50%;
  vertical-align: top;
  border-right: 1px solid #000;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: break-word;
}

.info-label :deep(.icon) {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
}

.info-label span {
  display: inline;
  overflow-wrap: break-word;
  word-break: break-word;
}

.info-value {
  padding: 15px 20px;
  width: 50%;
  vertical-align: top;
  text-align: right;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: break-word;
}

.info-value span {
  color: #000;
  font-weight: 400;
  font-size: 16px;
  text-align: right;
  overflow-wrap: break-word;
  word-break: break-word;
}

@media (max-width: 768px) {
  .info-label {
    padding: 12px 15px;
    font-size: 14px;
  }

  .info-value {
    padding: 12px 15px;
  }

  .info-value span {
    font-size: 14px;
  }
}
</style>
